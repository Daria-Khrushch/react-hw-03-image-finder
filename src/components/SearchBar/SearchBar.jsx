import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';

class SearchBar extends React.Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '21917533-94fc46511cdba7fd05c8e408d',
    images: [],
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`,
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />

        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        {this.state.images.length > 0 ? (
          <ImageGallery images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

// function SearchBar({ onSubmit }) {
//   return (
//     <header className={s.searchbar}>
//       <form className="form">
//         <button type="submit" class="button">
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// }

export default SearchBar;
