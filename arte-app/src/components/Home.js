import React from 'react';
import Comment from './Comment';
import image from '../image/c.jpg';
import profile_image from '../image/me.jpg'
// import Zoom from 'react-medium-image-zoom';

class Home extends React.Component {

  render() {
    return (
      <div className='home-container'>
        <h2>Home</h2>

        <div className='art-frame'>
          <img src={image} alt='image' />
          <div className='art-info'>
            <p className='title'>ひまわり</p>
            <p className='author'>ゴッホ</p>
          </div>
        </div>

        <div className='comment-add'>
          <div className='profile-thumbnail'>
            <img src={profile_image} alt='NaN' />
          </div>
          <form className='comment-form' action='/comments' method='post'>
            <div className='comment-tag'>
              <select name='comment-tag'>
                <option value=''>コメントタグを選ぶ…</option>
                <option value=''>絵を見て気づいたこと</option>
                <option value=''>絵でなにが起きているか</option>
                <option value=''>これからなにが起きそうか</option>
                <option value=''>絵から受けた印象</option>
              </select>
            </div>
            <div className='comment-text'>
              <input type='text' value='タグの回答とそれは絵のどの部分から連想したかを書きましょう' />
            </div>
            <div className='submit-button'>
              <input type="submit" value="送信する" />
            </div>
          </form>
        </div>
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default Home;