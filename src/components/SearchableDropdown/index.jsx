import React from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

const SearchableDropdownComponent = (props) => {
    const {
        setState,
        data,
        placeholder,
        containerStyle,
        autoCapitalize,
    } = props;

    // useEffect(() => {
    //     const getCitys = () => {
    //         Axios.get(
    //             'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'
    //         )
    //             .then((response) => {
    //                 let auxCity = [];
    //                 response.data.map((item) => {
    //                     const aux = { id: item.id, name: item.nome };
    //                     auxCity.push(aux);
    //                     setCitys(auxCity);
    //                 });
    //                 console.log(auxCity);
    //             })
    //             .catch((error) => console.log(error));
    //     };
    //     // console.log(items);
    //     getCitys();
    // }, []);

    return (
        <SearchableDropdown
            items={data}
            onItemSelect={(item) => {
                setState(item);
            }}
            containerStyle={
                containerStyle ? containerStyle : { width: '40%', padding: 5 }
            }
            itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            // defaultIndex={0}
            resetValue={false}
            textInputProps={{
                placeholder: placeholder,
                underlineColorAndroid: 'transparent',
                autoCapitalize: autoCapitalize ? autoCapitalize : 'none',
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
            }}
            listProps={{
                nestedScrollEnabled: true,
            }}
        />
    );
};

export default SearchableDropdownComponent;
