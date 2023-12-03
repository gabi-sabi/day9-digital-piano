const sounds = ["c1", "d1", "e1", "f1", "g1", "a1", "h1", "c2"]

sounds.forEach (sound => {
  const btn = document.createElement("button")
  btn.classList.add("btn")

  btn.innerText = sound

  btn.addEventListener("click", () => {
    document.getElementById(sound).play()
  })

  document.getElementById("buttons").appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.onpause()
    song.currentTime = 0;
  })
}
