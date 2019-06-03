import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          //reaguje na klik i poziva action, salje mu objekat book koji je prosao kroz map
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
//Sve sto je vraceno iz ove fje bice predstavljeno kao props u komponenti <BookList />
//Povezuje sa components/app.js - React sa STATE 
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

//Sve sto se vrati iz ove fje ce se pretvoriti u props u BookList containeru.
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
//Kad god je selectBook pozvan njegov rezultat iz returna se salje svim reducerima.
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
//Pomocu ove fje se actioni provlace kroz SVE reducere
//selectBook je uvezen iz /actions/index.js, iz njega je vracen objekat
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


//Imenuje <BookList /> iz komponente u contejner
//kad god se state promeni fja mapStateToProps ce se pokrenuti
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
