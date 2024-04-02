import { load as f_o_env } from "https://deno.land/std@0.221.0/dotenv/mod.ts";
let o_env = await f_o_env();

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
let a_s_repo = [
    "strapi_backup",
    "music-lessons",
    "deutsch",
    "gameengine",
    // "kuschbook1",
    "yugioh_strapi_consumer",
    "klara_ipa",
    "python_dualsense",
    // "pydualsense",
    // "DualSenseSupport",
    // "dualsense",
    // "ArduinoTutorials",
    "uriobject",
    "UrlParts",
    "randomInts",
    "jsanimation",
    "sound_science",
    "cameracontrol",
    "denojs_jsondb",
    "ledlightlayouter",
    "O_binary_string",
    "f_evaluate_object",
    "instant_messenger",
    "lieber_bewusst_sein_consumer",
    "lieber_bewusst_sein_documentations",
    "js_code",
    "kotlin_intellij_stuff",
    "kotlin_code",
    "go_code",
    "rust_code_old",
    "sqlite_tutorial",
    "npm_js_modules",
    "pyqt5-reactive-gui",
    "betriebspraktikum_2022",
    "threejs_projects",
    "marinas_kunst_gallerie",
    "coding_tutorials",
    "web_stuff",
    "visualisierung_deutsch_vortrag",
    "polynoms_base",
    "bfh_java_kotlin",
    "ascii",
    "networking_stuff",
    "hubbleharvest_windowsclient",
    "strapi-test-aja-soft-sqlite",
    "hubbleharvest",
    "imgae_compare_app",
    "denojs_f_o__casted_to_class",
    "phonetic",
    "custom_machine_code",
    "hubbleharvest_electron_consumer",
    "c_code",
    "ti_nspire_python_stuff",
    "denojs_code",
    "vuejs_template",
    "python_code",
    "rust_code",
    "keybindings_linux_and_windows",
    "c_sharp_dotnet_linux_messenger_app",
    "strapi_auto_generate_models",
    "let_me_van_de_paar_that_for_you",
    "rust_dualsense",
    "deno_stable_diffusion_autogenerate_stuff",
    "assembler_projects",
    "ocr_image_parts",
    "O_json_to_css",
    "strapi_golog_instantmessenger",
    "golog_doucmentations",
    "denojs_O_json_db",
    "deno_module_playground",
    "deno_o_path",
    "strapi_golog_consumer",
    "strapi_golog",
    "O_path_file",
    "docker_strapi_postgresql",
    "strapi_test",
    "docker_basics",
    "node_command",
    "linklist",
    "O_webserver",
    "deno_rust_midi",
    "statistics",
    "date_functions",
    "code_autoextender",
    "fitsfiddler",
    "o_file__fits",
    "label_layouter",
    "denojs_O_command",
    "web_datepicker",
    "o_file__wav",
    "O_wav_file",
    "qoi_file",
    "browser_notifier",
    "motorized_microscope",
    "fresh-fresh",
    "arduino",
    "O_url",
    "denojs_f_s_html_syntax_highlighted",
    "side_slider",
    "stellarium_gornergrat_betriebspraktikum_2023_imagemanipulation",
    "denojs_O_number_normalized",
    "denojs_math_constants",
    "javascript_basics",
    "hextovec3",
    "denojs_crudcracker",
    "js_minimal_gui",
    "denojs_f_a_o_missing_prop"
]
for(
    let s_name_repo of a_s_repo
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
