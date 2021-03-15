import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Card from './Card';


class App extends React.Component {
  render() {
    return (
      <div className="cards" >
        <Card
          pic={faker.image.animals()}
          title={faker.name.title()}
          desc={faker.commerce.productDescription()}
        />
        <Card
          pic={faker.image.animals()}
          title={faker.name.title()}
          desc={faker.commerce.productDescription()}
        />
        <Card
          pic={faker.image.animals()}
          title={faker.name.title()}
          desc={faker.commerce.productDescription()}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
