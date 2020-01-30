function scoreCred(cred) {
    if (cred === 0) {
        return 'poor';   
    }
    else if (cred < 50) {
        return 'modest';   
    }
    return 'rich';
}

export default scoreCred;