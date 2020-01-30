function scoreHealth(health) {
    if (health <= 0) {
        return 'dead';
    }
    if (health < 35) {
        return 'frail';
    }
    return 'healthy';
}

export default scoreHealth;