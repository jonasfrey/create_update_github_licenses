import { load as f_o_env } from "https://deno.land/std@0.221.0/dotenv/mod.ts";
let o_env = await f_o_env();

let a_o = [];
let n = 1;
let b_more = true;
let n_per_page_max = 100;
while(b_more){

    let o1 = await fetch(`https://api.github.com/user/repos?page=${n}&per_page=${n_per_page_max}`, {
      method: 'GET',
      headers: {
        'Authorization': `token ${o_env.s_token_api}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    let a_o2 = await (o1.json())
    a_o = [
        ...a_o,
        ...a_o2 
    ]
    b_more = a_o2.length == n_per_page_max
    n+=1
}

let a_s_repo_nonforked = a_o
                            .filter(o=>!o.fork)
                            .map(o=>o.name);
// console.log(a_s_repo_nonforked.length)
// Deno.exit()

function f_s_b64_from_s_utf(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, 
        function(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

let s_holder = 'Jonas Immanuel Frey'
let s_licence = `

MIT License

Copyright ${(new Date().getFullYear()).toString()} ${s_holder}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`
console.log(s_licence)

let s_b64_licence = f_s_b64_from_s_utf(s_licence)
let s_name_file = "LICENSE"

// class O_repo{
//     constructor(
//         s_name, 
//         s_ymd_archive
//     ){
//         this.s_name = s_name, 
//         this.s_ymd_archive = s_ymd_archive
//     }
// }
//Array.from(document.querySelectorAll('a')).filter(o=>o.getAttribute('itemprop')?.includes('codeRepository')).map(o=>o.innerText)

for(
    let s_name_repo of a_s_repo_nonforked
    // .slice(0,1)
    ){

    let o = await fetch(
        `https://api.github.com/repos/jonasfrey/${s_name_repo}/contents/${s_name_file}`, 
        {
            method: "PUT", 
    
            headers: {
                'Authorization': `token ${o_env.s_token_api}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                message: 'Add LICENSE',
                committer: {
                  name: 'jonas immanuel frey',
                  email: 'jonas.immanuel.frey@gmail.com',
                },
                content: s_b64_licence,
              }),
    
        }
    )
    console.log(o)

}    
