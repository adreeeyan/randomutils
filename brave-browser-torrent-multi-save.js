/*
*   Saves the multiple files from the brave browser web torrent.
*   It just clicks all the download link for you.
*   Note: Brave browser may prompt to "allow downloading multiple files", you know what to do.
*/

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const download = async (rows) => {
    for (const row of rows) {
        row.children[2].querySelector("a").click();
        await sleep(2000);
    }
}

const rows = [...document.getElementsByClassName("sc-ckVGcZ hVGZyy")];
download(rows);
