import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { apiService } from "../service/apiService";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ImageScreen = () => {
    const [images, setImages] = useState([]);
    const [likedImages, setLikedImages] = useState({});

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await apiService.getAllListImages();

                setImages(data);
            } catch (error) {
                console.error("Error llamado imágenes:", error);
            }
        };

        fetchImages();
    }, []);

    const toggleLike = (id) => {
        setLikedImages((prev) => ({
          ...prev,
          [id]: !prev[id],
        }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Imágenes</Text>
            <FlatList
                data={images}
                keyExtractor={(item) => item.id.toString()}
                /*numColumns={3}
                key={3}*/ // Error en Mobile, recortado. Web muestra las columnas
                renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.download_url }}
                        style={styles.image}
                    />
                    <TouchableOpacity
                        style={styles.heartButton}
                        onPress={() => toggleLike(item.id)}
                    >
                    <FontAwesome
                        name={likedImages[item.id] ? "heart" : "heart-o"}
                        size={20}
                        color={likedImages[item.id] ? "red" : "white"}
                    />
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 50
    },
    imageContainer: {
        flex: 1,
        margin: 3,
        position: "relative",
        alignItems: "center",
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    heartButton: {
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 15,
        padding: 5,
    },
});

export default ImageScreen;