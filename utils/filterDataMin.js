import { Button } from "@chakra-ui/react";

export const filterDataMin = [
    {
      items: [
        { name: 'Thessaloniki', value: 'thessaloniki' },
        { name: 'Athens', value: 'athens' },
        { name: 'Heraklion', value: 'heraklion' },
      ],
      placeholder: 'Location',
      queryName: 'locationExternalIDs',
    },
    {
      items: [
        { name: 'Buy', value: 'for-sale' },
        { name: 'Rent', value: 'for-rent' },
      ],
      placeholder: 'Purpose',
      queryName: 'purpose',
    },
    {
      items: [
        { name: '200', value: '200' },
        { name: '350', value: '350' },
        { name: '500', value: '500' },
        { name: '800', value: '800' },
        { name: '1000', value: '1000' },

      ],
      placeholder: 'Min Price(€)',
      queryName: 'minPrice',
    },
    {
      items: [

        { name: '350', value: '350' },
        { name: '500', value: '500' },
        { name: '800', value: '800' },
        { name: '1000', value: '1000' },
        { name: '2000', value: '2000' },
      ],
      placeholder: 'Max Price(€)',
      queryName: 'maxPrice',
    },
    {
      items: [
        { name: '40', value: '40' },
        { name: '60', value: '60' },
        { name: '80', value: '80' },
        { name: '100', value: '100' },
        { name: '120', value: '120' },
        { name: '200', value: '200' },
      ],
      placeholder: 'Max Area(m²)',
      queryName: 'areaMax',
    },
    {items: [
      { name: '40', value: '40' },
      { name: '60', value: '60' },
      { name: '80', value: '80' },
      { name: '100', value: '100' },
      { name: '120', value: '120' },
      { name: '200', value: '200' },
    ],
    placeholder: 'Min Area(m²)',
    queryName: 'areaMin',
  },
  {items: [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
  ],
  placeholder: 'Min Rooms',
  queryName: 'roomsMin',
},
    {
      items: [
        { name: 'Lowest Price', value: 'price-asc' },
        { name: 'Highest Price', value: 'price-des' },
        { name: 'Newest', value: 'date-asc' },
        { name: 'Oldest', value: 'date-desc' },
        // { name: 'Verified', value: 'verified-score' },
        // { name: 'City Level Score', value: 'city-level-score' },
      ],
      placeholder: 'Sort',
      queryName: 'sort',
    }
  ];
  
  export const getFilterValues = (filterValues) => {
    const {
      purpose,
      minPrice,
      maxPrice,
      areaMax,
      areaMin,
      sort,
      bathsMin,
      bathsMax,
      roomsMax,
      roomsMin,
      levelMax,
      levelMin,
      yearMin,
      yearMax,

      locationExternalIDs,
    } = filterValues;
  
    const values = [
      {
        name: 'purpose',
        value: purpose,
      },
      {
        name: 'minPrice',
        value: minPrice,
      },
      {
        name: 'maxPrice',
        value: maxPrice,
      },
      {
        name: 'areaMax',
        value: areaMax,
      },
      {
        name: 'areaMin',
        value: areaMin,
      },
      {
        name: 'sort',
        value: sort,
      },
      {
        name: 'locationExternalIDs',
        value: locationExternalIDs,
      },
      {
        name: 'bathsMin',
        value: bathsMin,
      },
      {
        name: 'bathsMax',
        value: bathsMax,
      },
      {
        name: 'roomsMin',
        value: roomsMin,
      },
      {
        name: 'roomsMax',
        value: roomsMax,
      },
      {
        name: 'levelMin',
        value: levelMin,
      },
      {
        name: 'levelMax',
        value: levelMax,
      },
      {
        name: 'yearMin',
        value: yearMin,
      },
      {
        name: 'yearMax',
        value: yearMax,
      },


    ];
  
    return values;
  };
  