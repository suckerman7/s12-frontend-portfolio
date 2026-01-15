import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendPortfolioData } from '../store/portfolioSlice';

export default function PortfolioProvider ({ children }) {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.ui.language);

    useEffect(() => {
        dispatch(sendPortfolioData(language));
    }, [language, dispatch]);

    return children;
}