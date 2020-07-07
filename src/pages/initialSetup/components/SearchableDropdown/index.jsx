import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchableDropdown from 'react-native-searchable-dropdown';

import CitysData from '../../../../data/citys.json';

const SearchableDropdownComponent = (props) => {
    const { setOrigin, setDestiny, origin } = props;
    const [citys] = useState(CitysData);

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
            items={citys}
            onItemSelect={(item) => {
                // console.log(item);
                origin ? setOrigin(item) : setDestiny(item);
            }}
            containerStyle={{ width: '40%', padding: 5 }}
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
                placeholder: origin ? 'Origem' : 'Destino',
                underlineColorAndroid: 'transparent',
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
