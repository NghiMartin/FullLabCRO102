import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import InputField from '../../component/InputField';
import React, { useState, useEffect, useRef } from 'react';
import {  useLazyGetPokemonByNameQuery } from '../../store/pokemon-api-slice';
import CustomButton from '../../component/CustomButton';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../assets';
export default function ReducersQuery() {
    const [namePokemon, setNamePokemon] = useState('bulbasaur');
    const [isTextShow, setIsTextShow] = useState(false);
    const [pokemonData, setPokemonData] = useState(null);

    const [getPokemonByName, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

    const handleClick = async () => {
        setIsTextShow(true);
        if (namePokemon) {
            try {
                const result = await getPokemonByName(namePokemon);
                setPokemonData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }

    return (
        <View
        style={{
            alignItems: 'center',
            padding: 50
        }}
        >
            <InputField label={'Enter your pokemon'} value={namePokemon} onChangeText={setNamePokemon}/> 
            {isLoading ? (
                <ActivityIndicator  size={'large'}/>
            ) : (
                <>
                {isTextShow && pokemonData && (
                    <>
                        <Text
                        style={{
                            fontFamily: FONTFAMILY.poppins_bold,
                            fontSize: FONTSIZE.size_18
                        }}
                        >Name Pokemon: 
                        <Text
                        style={{
                            color: COLORS.red
                        }}
                        >
                        {pokemonData.species.name}
                        </Text>
                        </Text>
                        <Image
                            style={{
                                width: 200,
                                height: 200
                            }}
                            source={{ uri: pokemonData.sprites.front_shiny}}
                        />
                    </>
                )}
                </>
            )}
            <CustomButton title='Click me!' onPress={handleClick} />
        </View>
    );
}

//name:"bulbasaur"
// url:"https://pokeapi.co/api/v2/pokemon/1/"
// name:"ivysaur"
// url:"https://pokeapi.co/api/v2/pokemon/2/"
// name:"venusaur"
// url:"https://pokeapi.co/api/v2/pokemon/3/"
// name:"charmander"
// url:"https://pokeapi.co/api/v2/pokemon/4/"
// name:"charmeleon"
// url:"https://pokeapi.co/api/v2/pokemon/5/"
// name:"charizard"
// url:"https://pokeapi.co/api/v2/pokemon/6/"
// name:"squirtle"
// url:"https://pokeapi.co/api/v2/pokemon/7/"
// name:"wartortle"
// url:"https://pokeapi.co/api/v2/pokemon/8/"
// name:"blastoise"
// url:"https://pokeapi.co/api/v2/pokemon/9/"
// name:"caterpie"
// url:"https://pokeapi.co/api/v2/pokemon/10/"
// name:"metapod"
// url:"https://pokeapi.co/api/v2/pokemon/11/"
// name:"butterfree"
// url:"https://pokeapi.co/api/v2/pokemon/12/"
// name:"weedle"
// url:"https://pokeapi.co/api/v2/pokemon/13/"
// name:"kakuna"
// url:"https://pokeapi.co/api/v2/pokemon/14/"
// name:"beedrill"
// url:"https://pokeapi.co/api/v2/pokemon/15/"
// name:"pidgey"
// url:"https://pokeapi.co/api/v2/pokemon/16/"
// name:"pidgeotto"
// url:"https://pokeapi.co/api/v2/pokemon/17/"
// name:"pidgeot"
// url:"https://pokeapi.co/api/v2/pokemon/18/"
// name:"rattata"
// url:"https://pokeapi.co/api/v2/pokemon/19/"
// name:"raticate"
// url:"https://pokeapi.co/api/v2/pokemon/20/"