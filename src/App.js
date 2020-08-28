import React, { Component } from 'react';
//import './App.css';
import ListAccordion from './ListAccordion';

class App extends Component {

  
    	 lists=[
    	[ 'Золоті Медалісти', 'Буньківська Оксана В′ячеславівна', 'Дуцник Наталія Анатоліївна', 'Козьякова Марина Володимирівна', 'Козьякова Наталія Олександрівна',
  			'Почтаренко Ганна Сергіївна', 'Негрійко Тамара Анатоліївна', 'Серебрянікова Ольга Олексіївна', 'Семенюк Валерія Дем’янівна',
            'Скрипнюк Наталія Олександрівна', 'Стадник Наталя Володимирівна', 'Федорко Оксана Романівна', 'Шиденко Юрій Миколайович'],
    	[ 'Срібні медалісти', 'Галуха Оксана Григорівна', 'Віннік Ольга Євгенівна','Кононова Ольга Андріївна',  'Гугля Леоніла Ігорівна',
    	 'Кисіль Ірина Володимирівна', 'Курдіна Ірина Володимирівна', 'Ольшанський Олександр Вікторович', 'Майстренко Дмитро Віталійович',
 		 'Оробець Леся Юріївна', 'Молібог Сергій Ігорович', 'Палій Наталія Олегівна',  'Монастирук Юлія Аркадіївна', 'Степанець Інна Олександрівна', 
 		 'Омельчук Олександр Валерійович', 'Чернявський Назар Анатолійович', 'Радченко Віталій Володимирович',  'Рассомахіна Ольга Андріївна', 
 		 'Скубенко Олександр Петрович', 'Хилько Олеся Миколаївна',   'Якобчук Ганна Зіновіївна'],
    	['Призери конкурсу-захисту науково-дослідницьких робіт Малої Академії Наук', 'Гнучева Олена Сергіївна', 'Дерев’янко Тетяна Вікторівна', 
    	 'Євдокимов Дмитро Андрійович',  'Іоффе Юлія Олександрівна', 'Мігаметій Катерина Андріївна', 'Ланевська Анна Євгенівна', 
    	 'Палько Олена Павлівна', 'Мацепура Інна Олександрівна', 'Фіногін Андрій Сергійович', 'Шемог Олена Андріївна', 
    	 'Ущапівська Анастасія Павлівна', 'Шкрабалюк Юлія Олександрівна', 'Хом’як Василь Романович',  'Хворостяний Ігор Григорович',
    	 'Цирульнева Юна Володимирівна', 'Яценко Ніна Григорівна'  ],
    	[ 'Переможці міжнародних олімпіад', 'Бровко Олександра Миколаївна',  'Вишнівська Ольга Олександрівна', 'Лихно Ярослав Юрійович',  'Грищенко Ігор Валерійович', 
    	  'Калітовська Галина Віталіївна',  'Ковальова Маргарита Сергіївна',  'Кучмієнко Ольга Володимирівна',  'Лютий Василь Романович', 
    	  'Пустовойт Максим Олександрович', 'Сапіга Оксана Олегівна', 'Смаль Ольга Ігорівна', 'Терещук Єлизавета Сергіївна', 'Токарський Богдан Ігорович', 
    	  'Царькова Станіслава Ігорівна',  'Цірат Катерина Геннадіївна' ]
    ]
  

  render() {
    return <ListAccordion lists={this.lists}  />
  }
}

export default App;
