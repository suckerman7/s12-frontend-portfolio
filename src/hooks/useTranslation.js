import { useSelector } from "react-redux";
import en from '../data/en.json';
import tr from '../data/tr.json';

const languages = { en, tr };

export default function useTranslation() {
    const language = useSelector((state) => state.ui.language);

    return languages[language] || languages.en;
}