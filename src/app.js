import React from 'react';

// Components
import { Cards, Chart, CountryPicker} from './components';

// Styling
import styles from './app.module.css';

// api
import { getData } from './api';

// image
import coronaImage from './img/covid.png';

class App extends React.Component {
  state = {
    country: '',
    data: {}
  }

  async componentDidMount() {
    const result = await getData();

    this.setState({ data: result });
  }

  handleCountryChange = async (country) => {
    const result = await getData(country);

    this.setState({ data: result, country: country });
  }

  render() {
    const { country, data } = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} alt='COVID-19 image' src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart country={country} data={data}/>
      </div>
    )
  }
}

export default App;
