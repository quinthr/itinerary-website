'use client';

import { useState, ChangeEvent } from 'react';
import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const places = [
  {
    name: 'Tokyo',
    secondary: '',
  },
];

const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : places.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion: { name: string }) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: { name: string }) => (
  <div>{suggestion.name}</div>
);

const HeaderSearch = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<
    { name: string; secondary: string }[]
  >([]);

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: 'Type a place',
    value: value,
    onChange: onChange,
  };

  return (
    <>
      <div className='w-[300px] max-w-[300px]'>
        <div>
          <div className='border-box relative'>
            <div className='relative flex w-full items-center rounded-lg'>
              <div className='color-[#6c757d] absolute ml-4 w-6'>
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ color: '#6c757d', width: '1.25rem' }}
                />
              </div>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
