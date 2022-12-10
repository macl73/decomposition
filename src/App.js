import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import LinksChain from './components/LinksChain.js';
import News from './components/News.js';
import ExchangeInfo from './components/ExchangeInfo.js';
import SearchBar from './components/SearchBar.js';
import Ad from './components/Ad.js';
import Logo from './components/Logo.js';
import ArticleLink from './components/ArticleLink.js';
import BottomContent from './components/BottomContent.js';

function App() {

  const date = new Date();
  const exchangeData = [
    {name: "USD MOEX", value: "65", shift: "+0.1"},
    {name: "EUR MOEX", value: "70", shift: "-0.1"}, 
    {name: "НЕФТЬ", value: "40", shift: "+0.9"}
  ];
  const topLinks = ["Сейчас в СМИ", "В Германии", "Рекомендуем"];
  const services = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"];
  const news = ["Новость 1", "Новость 2", "Новость 3", "Новость 4", "Новость 5"];

  return (
    <div className="container">
      <header className="header">
      <section>
      <LinksChain links={topLinks} className="links-chain">
        <span className="date">{String(date)}</span>
      </LinksChain>

      <News links={news} className="news-today" />

      <ExchangeInfo data={exchangeData} />
      </section>

      <section>
      <ArticleLink name="Работа над ошибками" info="Смотрите на Яндексе и запоминайте" logo="https://cdn.freelance.ru/img/portfolio/pics/00/3D/54/4019446.jpg?mt=5e1b3045" />
      </section>
      </header>

      <LinksChain links={services} className="links-chain" />

      <SearchBar>
      <Logo />
        <span>Найдется все. Например: фаза луны сегодня</span>
      </SearchBar>

      <Ad />

      <footer className="footer">
        <BottomContent name="Погода" data={[]}>
          <div><span>+17 </span><span>Утром +15 </span><span>Днем +17</span></div>
        </BottomContent>
        <BottomContent name="Посещаемое" data={["элемент 1", "элемент 2", "элемент 3"]} />
        <BottomContent name="Карта Германии" data={["Расписания"]} />
        <BottomContent name="Телепрограмма" data={["элемент 1", "элемент 2", "элемент 3"]} />
        <BottomContent name="Эфир" data={["элемент 1", "элемент 2", "элемент 3"]} />
      </footer>
    </div>
  );
};

App.propTypes = {
  exchangeData: PropTypes.array,
  links: PropTypes.array,
  news: PropTypes.array,
  name: PropTypes.string,
  info: PropTypes.string,
  logo: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array
};

export default App;
