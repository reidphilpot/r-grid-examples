function createColumns () {
  return [
    {
      id: 'name'
    , field: 'name'
    , label: 'Name'
    , width: '175px'     
    }
  , {
      id: 'streetAddress'
    , field: 'streetAddress'
    , label: 'Address'  
    , width: '200px'       
    }
  , {
      id: 'city'
    , field: 'city'
    , label: 'City'  
    , width: '150px'       
    }
  , {
      id: 'country'
    , field: 'country'
    , label: 'Country'  
    , width: '150px'       
    }
  , {
      id: 'zipCode'
    , field: 'zipCode'
    , label: 'Zip Code'  
    , width: '150px'       
    }
  ];
}

function fakeData (d, i) {
  return {
    id: i + 1
  , name: Faker.Name.findName()
  , streetAddress: Faker.Address.streetAddress()
  , city: Faker.Address.city()
  , zipCode: Faker.Address.zipCode()
  , country: Faker.Address.ukCountry()
  };
}