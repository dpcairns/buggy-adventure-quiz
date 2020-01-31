// build a simple JS user out of formdata object
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        health: 35,
        cred: 0,
        completed: {}
    };

    return user;
}
export default makeUser;