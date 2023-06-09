import React, {Component} from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {connect} from "react-redux"
import {ADD_ARTICLE} from "../store/actionTypes"

class Article extends Component<ArticleState> {
    render() {
        let articles = this.props.articles;
        return (
            <View>
                {
                    articles.map((article) => (
                        <Pressable onPress={() => this.props.removeArticle(article)}>
                            <Text>{article.title}</Text>
                        </Pressable>
                    ))
                }
                <Pressable onPress={() => this.props.addArticle({
                    title : "Third",
                    body : "Hello",
                    id : 3
                })}>
                   <Text>Add Article</Text>
                </Pressable>
            </View>
        ) 
    }
}

function mapStateToProps(state : ArticleState) {
 let articles = state.articles;
 return {
    articles
 }   
}

const  mapDispatchToProps = (dispatch : DispatchType) => ({
    addArticle : (article : IArticle) => {
        dispatch({type : "ADD_ARTICLE",article})
    },
    removeArticle : (article : IArticle) => {
        dispatch({type : "REMOVE_ARTICLE", article})
    } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);

const styles = StyleSheet.create({

})

