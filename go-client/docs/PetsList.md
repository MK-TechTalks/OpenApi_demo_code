# PetsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pets** | [**[]Pet**](Pet.md) | List of pets | 

## Methods

### NewPetsList

`func NewPetsList(pets []Pet, ) *PetsList`

NewPetsList instantiates a new PetsList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPetsListWithDefaults

`func NewPetsListWithDefaults() *PetsList`

NewPetsListWithDefaults instantiates a new PetsList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPets

`func (o *PetsList) GetPets() []Pet`

GetPets returns the Pets field if non-nil, zero value otherwise.

### GetPetsOk

`func (o *PetsList) GetPetsOk() (*[]Pet, bool)`

GetPetsOk returns a tuple with the Pets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPets

`func (o *PetsList) SetPets(v []Pet)`

SetPets sets Pets field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


