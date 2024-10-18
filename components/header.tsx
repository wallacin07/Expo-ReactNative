import { View,Text, Image, ImageSourcePropType, StyleSheet } from "react-native"


 const Header = ({image} : {image: ImageSourcePropType | undefined}) => {

    return(
        <>
            <View style={styles.background}>
                <Text style={styles.text}>header exemplo</Text>
                <Text style={styles.fonteDiferente}>testando fonts diferentes</Text>
                <Image style={styles.image} source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#646161FF",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 30,
        justifyContent: "center",
    },
    image: {
        width:60,
        height:60
    },
    text: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 30,
        fontFamily: "aaa",
    },
    fonteDiferente: {
        fontFamily: "Anton",
        color: "#FFFFFF"
    }
})

export default Header