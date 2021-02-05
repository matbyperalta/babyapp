'use strict'

import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';

export default class dashboardGiftView extends Component{

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
    fetch('http://macbook-pro-de-matby.local:8080/ApiBaby/babyapi/gift?pagina=' + this.offset)
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
    console.log('http://macbook-pro-de-matby.local:8080/ApiBaby/babyapi/gift?pagina=' + this.offset)
    this.setState({fetching_from_server: true}, () => {
      fetch('http://macbook-pro-de-matby.local:8080/ApiBaby/babyapi/gift?pagina=' + this.offset)
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
                <Text style={styles.text}>{item.descripcion}</Text>
                <Image style={styles.image} source={{ uri: item.url }} />
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
    width: '100%',
    height: '100%',
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
  text: {
    color: '#393838',
    top: 5,
    margin: 1
  }
})

module.exports = dashboardGiftView;
