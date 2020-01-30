function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    // below is the code for a more complicated search, but since ours is simple we used the code below the commented out section
    // const searchParams = new URLSearchParams();
    // searchParams.set('id', quest.id);
    // link.href = 'quest?' + searchParams.toString();
    link.href = '../quest/?id=' + quest.id;

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;

    return link;
}

export default createQuestLink;