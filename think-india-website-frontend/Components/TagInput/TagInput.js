import React, { useState } from "react";

const TagInput = (props) => {
  const { tags, setTags } = props;
  const [tag, setTag] = useState("");

  const capitalize = (s) => {
    let first = String(s)[0];
    let last = String(s).slice(1);
    return first.toUpperCase() + last.toLowerCase();
  };

  const handleAdd = (e) => {
    const val = e.target.value;
    if (val[val.length - 1] === " ") {
      if (tag.length >= 1) {
        let flag = false;
        tags.forEach((el) => {
          if (el === capitalize(tag)) {
            flag = true;
            return;
          }
        });
        if (!flag) setTags([...tags, capitalize(tag)]);
        setTag("");
      }
    } else {
      setTag(val);
    }
  };

  const handleDelete = (e) => {
    let val = e.target.parentNode.firstChild.innerHTML;
    let ind = -1;
    tags.forEach((el, i) => {
      if (el === val) {
        ind = i;
        return;
      }
    });
    setTags([...tags.slice(0, ind), ...tags.slice(ind + 1)]);
  };

  return (
    <div id="tagSection">
      <div className="tags-input-wrapper">
        {tags.map((el) => (
          <span className="tag" key={el}>
            <span>{el}</span>
            <div className="crossLink" onClick={handleDelete}>
              x
            </div>
          </span>
        ))}
        {tags.length < 5 ? (
          <input
            className="app-form-control"
            placeholder="TAGS"
            value={tag}
            onChange={handleAdd}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TagInput;
