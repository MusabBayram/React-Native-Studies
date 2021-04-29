import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { CardSection } from '../ortak';
import { connect } from 'react-redux';
import { studentsListData } from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component {

componentDidMount() {
this.props.studentsListData();
console.log(this.props.studentsArray);
}

renderRow({ item, index }) {
    return <ListItem ogrenci={item} />;
    console.log('nasıl gelmez');
  }

render() {
  console.log(this.props.studentsArray);
  return (
    <FlatList
      data={this.props.studentsArray}
      renderItem={this.renderRow}
      keyExtractor={(item, index) => index.toString()}
    />

    );
  }
}

const mapStateToProps = ({ studentDataResponse }) => {
// studentDataResponse
  const studentsArray = _.map(studentDataResponse, (val, uid) => {
      return { ...val, uid }; // { isim: ayse, soyisim: soyu, sube: 1c, uid: Kq9 }
  });
  return { studentsArray };
};


export default connect(mapStateToProps, { studentsListData })(StudentsList);
