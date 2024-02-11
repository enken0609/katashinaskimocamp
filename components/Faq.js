import { useState } from 'react';
import useLocale from '../hooks/useLocale';

const FAQ = ({}) => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]); // 各質問の状態を管理する配列

  const { t } = useLocale();

  const toggleFAQ = (index) => {
    const newIsOpen = [...isOpen]; // 現在の状態をコピー
    newIsOpen[index] = !newIsOpen[index]; // クリックされた質問の状態をトグル
    setIsOpen(newIsOpen); // 状態を更新
  };

  return (
    <>
      <div className="faq-item bg-white mb-4 rounded-md p-2 cursor-pointer" key={1}>
        <div className={`faq-question py-4 pl-2 ${isOpen[0] ? 'open' : ''}`} onClick={() => toggleFAQ(0)}>
          <span className="text-base-900 text-xl font-bold">Q</span> {t.Q_1}
        </div>
        {isOpen[0] && <div className="faq-answer border-t-2 border-gray-100 py-4 pl-2 cursor-default">{t.A_1}</div>}
      </div>
      <div className="faq-item bg-white mb-4 rounded-md p-2 cursor-pointer" key={2}>
        <div className={`faq-question py-4 pl-2 ${isOpen[1] ? 'open' : ''}`} onClick={() => toggleFAQ(1)}>
          <span className="text-base-900 text-xl font-bold">Q</span> {t.Q_2}
        </div>
        {isOpen[1] && <div className="faq-answer border-t-2 border-gray-100 py-4 pl-2 cursor-default">{t.A_2}</div>}
      </div>
      <div className="faq-item bg-white mb-4 rounded-md p-2 cursor-pointer" key={3}>
        <div className={`faq-question py-4 pl-2 ${isOpen[2] ? 'open' : ''}`} onClick={() => toggleFAQ(2)}>
          <span className="text-base-900 text-xl font-bold">Q</span> {t.Q_3}
        </div>
        {isOpen[2] && <div className="faq-answer border-t-2 border-gray-100 py-4 pl-2 cursor-default">{t.A_3}</div>}
      </div>
      <div className="faq-item bg-white mb-4 rounded-md p-2 cursor-pointer" key={4}>
        <div className={`faq-question py-4 pl-2 ${isOpen[3] ? 'open' : ''}`} onClick={() => toggleFAQ(3)}>
          <span className="text-base-900 text-xl font-bold">Q</span> {t.Q_4}
        </div>
        {isOpen[3] && <div className="faq-answer border-t-2 border-gray-100 py-4 pl-2 cursor-default">{t.A_4}</div>}
      </div>
      <div className="faq-item bg-white mb-4 rounded-md p-2 cursor-pointer" key={4}>
        <div className={`faq-question py-4 pl-2 ${isOpen[4] ? 'open' : ''}`} onClick={() => toggleFAQ(4)}>
          <span className="text-base-900 text-xl font-bold">Q</span> {t.Q_5}
        </div>
        {isOpen[4] && <div className="faq-answer border-t-2 border-gray-100 py-4 pl-2 cursor-default">{t.A_5}</div>}
      </div>
    </>
  );
};

export default FAQ;
