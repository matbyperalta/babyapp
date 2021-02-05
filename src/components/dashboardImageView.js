'use strict'

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class dashboardImageView extends Component{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      fetching_from_server: false,
      refreshing: false
    };
    this.offset = 1;
  }

  componentDidMount() {
    fetch('http://macbook-pro-de-matby.local:8080/ApiBaby/babyapi/images?pagina=' + this.offset)
      .then((response) => response.json())
      .then((json) => {
        this.offset = this.offset + 1;
        this.setState({ data: json.imagenes });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }


  handleRefresh = () => {
    this.setState(
      {
        offset: 1,
        efreshing: true,
        data: []
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData = () =>{
    this.setState({fetching_from_server: true}, () => {
      fetch('http://macbook-pro-de-matby.local:8080/ApiBaby/babyapi/images?pagina=' + this.offset)
      .then((response) => response.json())
      .then((json) => {
        this.offset = this.offset + 1;
        this.setState({
          data: [ ... this.state.data, ... json.imagenes ],
          fetching_from_server: false,
          refreshing: false
        });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  renderFooter = () =>{
    if(!this.state.isLoading) return null;

    return(
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  render(){
    const { data, isLoading } = this.state;
    return(
      <SafeAreaView style={{ top:10, backgroundColor: '#B8B7B7' }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Text style={styles.text1}>{item.username}</Text>
                <Text style={styles.text2}>{item.upadteAt}</Text>
                <Image style={styles.image} source={{ uri: item.url }} />
                <Text style={styles.text3} numberOfLines={1} ellipsizeMode={'tail'}>{item.descripcion}</Text>
                <Text style={styles.text4}>(@{item.twitterUsername}) | Twitter</Text>
                <Text style={styles.text5}>(@{item.instagramUsername}) | Instagram</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.loadMoreData}
            onEndReachedThreshold={50}
          />
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    resizeMode: 'stretch',
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    borderWidth: 0,
    margin: 0.5,
    //alignItems: 'center',
    //padding: 14,
    //justifyContent: 'center'
  },
  title:{
    top: 0.3
  },
  image: {
    flex: 0.3,
    resizeMode: 'cover',
    //width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    top: 10
  },
  separator: {
    height: 7,
    backgroundColor: '#B8B7B7'
  },
  text1: {
    fontWeight: 'bold',
    color: '#393838',
    top: 5,
    margin: 5
  },
  text2: {
    color: '#393838',
    top: 5,
    margin: 5
  },
  text3: {
    color: '#393838',
    top: 12,
    width: '100%',
    margin: 5
  },
  text4: {
    color: '#2461F7',
    top: 5,
    width: '100%',
    height: 25,
    marginLeft: 5,
    marginTop: 5
  },
  text5: {
    color: '#2461F7',
    width: '100%',
    marginLeft: 5,
    marginTop: 1,
    marginBottom: 2

  }

})

module.exports = dashboardImageView;
