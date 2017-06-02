import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

const realm = new Realm({schema: [Fave]});
console.log('the path is: ', realm.path);

// CRUD OPERATIONS
export const queryFaves = () => {
  let faveIds = realm.objects('Fave').map((fave) => fave.id);
  return faveIds;
};

export const createFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', {id: faveId, faved_on: new Date});
  });
};

export const deleteFave = (faveId) => {
  realm.write(() => {
    let fave = realm.objects('Fave').filtered('id == $0', faveId);
    realm.delete(fave);
  });
};

export default realm;