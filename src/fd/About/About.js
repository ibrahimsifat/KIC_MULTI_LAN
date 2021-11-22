import React from 'react';
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-red-500">
            {t("about_title")}
        </div>
    );
};

export default About;