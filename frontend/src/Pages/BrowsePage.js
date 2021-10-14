import React, { Component } from 'react';
import OptionsDropdown from '../Components/OptionsDropdown';
import Card from '../Components/Card';
import './BrowsePage.css';

export default class BrowsePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let filterByMenuEl = ['All items', 'Single items', 'Bundles'];
    let sortByMenuEl = ['Price: Low to High', 'Price: High to Low', 'Most Favorited'];
    let card1 = {
      name: 'Collectible 1',
      description: 'This is a description',
      price: '0.11',
      img: 'https://lh3.googleusercontent.com/Fviz0PWzUMQ98uvUZV8e_3y2R3D0nwk9q3jCQONoA2jh83vN2phkxEmLD3zpE1iiPOWNqh38rCqOC4agChgi704d0VGjgqwXrjiZ1Q=w600',
      list_date: 'here'
    }
    let card2 = {
      name: 'Collectible 2',
      description: 'This is a description',
      price: '0.12',
      img: 'https://lh3.googleusercontent.com/8pQQRseehVjJ5PRZkXANawtaCooQfdTF9Ld3UvJVXxVaiixxM9x357NqLwFqindvDlKZ-XqbLytwzL-LxpiDPgJLIqOq5OHjhg5PAQ=w600',
      list_date: 'here'
    }
    let card3 = {
      name: 'Collectible 3',
      description: 'This is a description',
      price: '0.13',
      img: 'https://lh3.googleusercontent.com/a2w4nmFDYU1Z5kimGQtymbw7E-Jj8zrZRGiKmkmv03e9z5VJAFFqSIsvq39EjtlETwluC9hDGx6EpS5YOCVN6X6pTlAiOpuD5tYW=w600',
      list_date: 'here'
    }
    let card4 = {
      name: 'Collectible 4',
      description: 'This is a description',
      price: '0.14',
      img: 'https://lh3.googleusercontent.com/P0FjJQ-9_YlBUtl6-pg5tgz1KUOqxgGRnB0u4v3C6YnY14cMWealXb5u3O2OI_Zr-YxMYaRs_b4TVrBTZzXF18_zhZ1WWPsBYj6xyg=w600',
      list_date: 'here'
    }
    let card5 = {
      name: 'Collectible 5',
      description: 'This is a description',
      price: '0.15',
      img: 'https://lh3.googleusercontent.com/alrw4OsjldeYC5WpJCfneeui2F4lNDU0xYLp80LA9horlf7wufhRG_2ln5u72PLaNh9tF_3WqSXZoCFTgIC9GatkKPobLQ5zYJgrug=w600',
      list_date: 'here'
    }
    let card6 = {
      name: 'Collectible 6',
      description: 'This is a description',
      price: '0.16',
      img: 'https://lh3.googleusercontent.com/lGp0y5VfF0j0gpe9OcY34inan58xkJuH6i6vCtCempSbUBMsF0cXexO_rFJNixIQP3n27M0L1waBS8oUI_JayefpzmB9Lw3q5oq6=w600',
      list_date: 'here'
    }

    let cards = [card1, card2, card3, card4, card5, card6]

    return (
      <div className='BrowsePage'>

        <div className='browse-options'>
          <div className='browse-results'>100,000 results</div>
          {/* <div className='options-spacer' /> */}
          <div className='browse-dropdowns'>
            <OptionsDropdown title='Filter by' menuEl={filterByMenuEl} />
            <OptionsDropdown title='Sort by' menuEl={sortByMenuEl} />
          </div>
        </div>
        <div className='browse-main'>
          {cards.map((e, index) => {
            return <Card
              key={index}
              name={e.name}
              description={e.description}
              price={e.price}
              img={e.img}
            />
          })}
        </div>
      </div>
    );
  }
}
