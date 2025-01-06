const endpointUrls = {
    createWish: "http://localhost:8080/wish",
    deleteWish: "http://localhost:8080/wish/delete/{{id}}",
    getWishListsAndWishesForUser: "http://localhost:8080/wish-list/user/${userId}"
}
export default endpointUrls;



/*
snagged this off the interwebs. should be able to pass like this.
can probably create some helper functions to facilitate.

import React, { useState } from 'react';

interface Props {
  initialValue: string;
}

const MyComponent: React.FC<Props> = ({ initialValue }) => {
  const [templateString, setTemplateString] = useState(initialValue);
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const renderTemplate = () => {
    const renderedString = templateString.replace(/\{\{(.*?)\}\}/g, (match, variableName) => {
      return value; // Replace all placeholders with the current value
    });

    return renderedString;
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <p>{renderTemplate()}</p>
    </div>
  );
};

export default MyComponent;
 */