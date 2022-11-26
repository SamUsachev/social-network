import React from 'react';

let interval;

export class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeedRNeedReload: false,
    };
  }

  componentDidMount() {
    //срабатывает в момент монтирования в дерево
    //fetch('')
    console.log('Mount');
    interval = setInterval(() => {
      console.log('tik');
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //срабатывает в момент обновления пропсов
    console.log('did update');
  }

  componentWillUnmount() {
    //срабатывает в момент размонтирования (удаления из дерева)
    clearInterval(interval);
  }

  render() {
    return <div>Лента новостей</div>;
  }
}
