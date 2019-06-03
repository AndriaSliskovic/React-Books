import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Odaberite knjigu koju želite</div>;
    }

    return (
      <div>
        <h3>Izabrana knjiga:</h3>
        <div>Naslov: {this.props.book.title}</div>
        <div>Broj strana: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //activeBook je ono sto vraca reducer_active_book a nalazi se u rootReduceru
    book: state.activeBook
  };
}


//Ovde nema mapDispatchToProps() zato sto se ne ocekuje nikakav dogadjej na bookDetail
export default connect(mapStateToProps)(BookDetail);
