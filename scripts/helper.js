class Helper{

  playPauseAndUpdate(song) {
    player.playPause(song);
    if(player.playState !== 'playing'){return;}
      $('#time-control .total-time').text(player.getDuration());
  // why is the song duration specific to the playbar versus whole player??
  };

}

const helper = new Helper();
