
var booksTitles = [ 'mind_for_number',
                    'mind_shift',
                    'rework',
                    'remote',
                    'be_faker_but_never_will_be_able_to_make_it',
                    'fake_it_till_your_make_it',
                    'Seven_habits',
                    'laravel_in_30_days',
                    'be_you_self',
                    'be_what_do_you_want_to_be'
        ];

        function list(items) {
            let ul = document.createElement("ul");
            items.forEach( (item) => {
                let li = document.createElement("li");
                ul.appendChild(li);
                li.textContent = item.toUpperCase().replace(/_/g, ' ');  
            });
            document.body.appendChild(ul);
        };

        // list(booksTitles);
       
        var bookData = {
             mind_for_number: {
                title: 'mind_for_number',
                language: 'en',
                author: 'barbara oakley'
            },

            mind_shift: {
                title: 'mind_shift',
                language: 'en',
                author: 'barbara oakley'
            },

            rework: {
                title: 'rework',
                language: 'en',
                author: 'barbara oakley'
            },

            remote: {
                title: 'remote',
                language: 'en',
                author: 'barbara oakley'
            },

            be_faker_but_never_will_be_able_to_make_it: {
                title: 'be_faker_but_never_will_be_able_to_make_it',
                language: 'en',
                author: 'barbara oakley'
            },

            fake_it_till_your_make_it: {
                title: 'fake_it_till_your_make_it',
                language: 'en',
                author: 'barbara oakley'
            },

            Seven_habits: {
                title: 'Seven_habits',
                language: 'en',
                author: 'barbara oakley'
            },

            be_you_self: {
                title: 'laravel_in_30_days',
                language: 'en',
                author: 'barbara oakley'
            },

            be_what_do_you_want_to_be: {
                title: 'be_what_do_you_want_to_be',
                language: 'en',
                author: 'barbara oakley'
            }
    };

function listObject(objects){
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (let key in objects ) {
            let li = document.createElement("li");
            ul.appendChild(li);
                let h2 = document.createElement("h2");
                li.appendChild(h2);
                h2.innerHTML = objects[key].title.toUpperCase().replace(/_/g, ' ');
                let p = document.createElement("p");
                li.appendChild(p);
                p.innerHTML = objects[key].language.toUpperCase();
                let b = document.createElement("b");
                li.appendChild(b);
                b.innerHTML = objects[key].author;
        };
}

console.log(listObject(bookData));



bookCovers = {
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i",
    "mind_for_number" : "http://t0.gstatic.com/images?q=tbn:ANd9GcQ4iPYgAFssn-DGcttvY5oz_wrKzw4Bp819Zfx4FSff1AzWZD4i", 
};

function Covers(data) {
    for (let key in data) {
        var img = document.createElement("img");
        img.setAttribute("src", data[key]);
        img.setAttribute("alt", key);
        let id = document.getElementById(key);
        id.appendChild(img);
    }
    document.body.appendChild(img);
}

Covers(bookCovers);
 