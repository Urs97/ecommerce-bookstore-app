import React, { useEffect } from 'react';
import './Store.scss';
import BooksContainer from '../BooksContainer/BooksContainer';
import StoreSidebar from '../StoreSidebar/StoreSidebar';
import PageHeader from '../PageHeader/PageHeader';

function Store() {
    
    const currentTitle = "Detective Novels";

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const fetchingTest = async () => {
    const urls = [];
    for(let i = 56877; i <= 56920; i++) {
        const url = `https://openlibrary.org/api/books?bibkeys=OLID:OL${i}M&format=json&jscmd=data`;
        urls.push(url);
    }

    const data = await Promise.all((urls)
        .map(url => fetch(url)
        .then(response => response.json())));

        console.log(data);
    }

    fetchingTest();

    return (
        <main>
            <PageHeader title={currentTitle} color="blue"/>
            <section className="store-main-container">
                <BooksContainer />
                <StoreSidebar />
            </section>
        </main>
    )
};

export default Store;


// const urls = [];
//         const url_1 = `https://pokeapi.co/api/v2/pokemon/${id}/`;
//         const url_2 = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
//         const url_prev = `https://pokeapi.co/api/v2/pokemon/${id-1}/`;
//         const url_next = `https://pokeapi.co/api/v2/pokemon/${id+1}/`;
//         urls.push(url_1, url_2);
//         if(id > 1) {urls.push(url_prev)} else {urls.push(url_1)};
//         if(id < 807) {urls.push(url_next)} else {urls.push(url_1)};

//         const data = await Promise.all((urls)
//             .map(url => fetch(url)
//             .then(response => response.json())));

// const pokemon = {
//     name : data[0].name,
//     id : data[0].id,
//     type : data[0].types.map(type => type.type.name).join(" "),
//     typeNumber : data[0].types.length,
//     height: data[0].height,
//     weight: data[0].weight,
//     image_front: data[0].sprites.front_default,
//     image_back: data[0].sprites.back_default,
//     shiny_image_front: data[0].sprites.front_shiny,
//     shiny_image_back: data[0].sprites.back_shiny,
//     description: data[1].flavor_text_entries,
//     short_description: data[1].genera,
//     generation: data[1].generation.name,
//     prev_name: data[2].name,
//     prev_id: data[2].id, 
//     next_name: data[3].name,
//     next_id: data[3].id,
//     prev_type: data[2].types.map(type => type.type.name).join(" "),
//     next_type: data[3].types.map(type => type.type.name).join(" "),