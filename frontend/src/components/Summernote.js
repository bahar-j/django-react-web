import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import "../css/summernote.css";

// imports for summernote
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "react-summernote/lang/summernote-ko-KR";
import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "bootstrap/dist/css/bootstrap.css";

function Summernote(props) {
  const boardId = props.match.params.id;
  let boardName = '';
  const [content, setContent] = useState([]);
  const [image, setImage] = useState({ file : null });
  const base = 'http://site_url/api/'; // 서버 주소
  const imageBase = 'http://site_url/photo/'; // 현재 로컬 주소
  var path = window.location.href;

  // const [files, setFile] = useState(null);
  if (boardId === "2") {
    boardName = "community";
  } else if (boardId === "3") {
    boardName = "events";
  } else if (boardId === "4") {
    boardName = "business";
  }

  const onChange = (content) => {
    setContent(content);
    console.log(content);
  };

  // const fileChangedHandler = (e) => {
  //   const files = e.target.files;
  //     setFile(files);
  // };

  const imageChangedHandler = (e) => {
      console.log(e.target.files[0]);
      setImage({ file : e.target.files[0] });
  }

  const onImageUpload = (images, insertImage) => {
    for (let i = 0; i < images.length; i++) {
      let data = new FormData();
      data.append("image", images[i]);

      console.log(data);
      axios.post(imageBase, data)
      .then( function(response){
        console.log(response.data['filename'])
        // 개발 환경에서는 "/static/"으로 해줘야 돌아감
        insertImage("/media/summernote/" + response.data['filename']);
      }).catch( (e) => {
        console.log(e)
      })

    }
  };

  const createPost = () => {
    const title = document.querySelector("#post-title").value;
    const checked = document.querySelector("#cbox").checked;
    let thumbnailURL = ''
    let thumbnail = new FormData();
    console.log(image['file']);
    thumbnail.append("image", image['file']);

    const createThumbnail = async () => {
      await axios.post(imageBase, thumbnail)
      .then( function(response){
      thumbnailURL = "/media/summernote/" + response.data['filename']
      console.log(window.location.origin + thumbnailURL)
    }).catch ((error) => {
      console.log(error);
    })}
    createThumbnail();

    const createData = async () => {
      await axios.post(base, {
        title: title,
        content: content.toString(),
        board: parseInt(boardId),
        status: "published",
        published: moment().format(),
        isNotice: Boolean(checked),
        author: 1,
        thumbnail: window.location.origin + thumbnailURL,
        // document: files[0],
      });
    };
    try {
      createData();
    } catch (error) {
      console.log(error);
    }

    // return (window.location.href = "/" + boardName);
  };

  return (
    <div className="post-container">
      <input type="text" id="post-title" placeholder=" 제목" />
      <ReactSummernote
        value="내용을 입력하여주세요"
        options={{
          lang: "ko-KR",
          height: 500,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]],
          ],
        }}
        onChange={onChange}
        onImageUpload={onImageUpload}
      />
      <span className="is-notice">
        공지글 여부: <input type="checkbox" id="cbox" />
      </span>
      <br />
      <br />
      {/* 파일 첨부: <input type="file" multiple onChange={fileChangedHandler} /><br /> */}
      <input type="file" accept="image/*" onChange={imageChangedHandler} /><br />
      <input
        type="button"
        className="notice-btn done"
        value="완료"
        onClick={createPost}
      />
      <input
        type="button"
        className="notice-btn done"
        value="취소"
        onClick={() => (window.location.href = "/" + boardName)}
      />
    </div>
  );
}

export default Summernote;
