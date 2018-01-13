import React from 'react';
import { gql, graphql } from 'react-apollo';

const LanguageMenu = ({ mutate }) => {

	// const selectLanguage = props.selectLanguage;
	const selectLanguage = (evt) => {
        console.log('selected language', evt.target.value)
		evt.persist();
		mutate({
			variables: { name: evt.target.value }
		})
	}

	return (
    <div className="form">
      <label>Translate to </label>
      <select onChange={selectLanguage}>
        <option value="en-US">English</option>
        <option value="es-ES">Spanish</option>
        <option value="zh-CN">Chinese</option>
        <option value="ar-SA">Arabic</option>
        <option value="de-DE">German</option>
        <option value="fr-FR">French</option>
        <option value="it-IT">Italian</option>
        <option value="pt-PT">Portuguese</option>
        <option value="nl-NL">Dutch</option>
        <option value="ja-JP">Japanese</option>
        <option value="ko-KR">Korean</option>
        <option value="ru-RU">Russian</option>
      </select>
    </div>
	);
};

const setLanguageMutation = gql`
	mutation SetLanguage($name: String!) {
		setLanguage(name: $name) {
			name
		}
	}
`;


const LanguageMenuWithMutation = graphql(setLanguageMutation)(LanguageMenu);

export default LanguageMenuWithMutation;