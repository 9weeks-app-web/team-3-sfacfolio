'use client';

import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

interface ToastUIEditorProps {
  content?: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function ToastUIEditor({
  content,
  setContent,
}: ToastUIEditorProps) {
  const editorRef = useRef<Editor>(null);
  const onChange = () => {
    // 에디터에 입력된 내용을 HTML 태그 형태로 취득
    const htmlContent = editorRef.current?.getInstance().getHTML();
    setContent(htmlContent);
  };

  return (
    <Editor
      toolbarItems={[
        // 툴바 옵션 설정
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
      initialValue={content ?? ' '}
      autofocus={false}
      height='640px'
      ref={editorRef}
      onChange={onChange}
      language='ko-KR'
      initialEditType='wysiwyg'
      hideModeSwitch={true}
    />
  );
}
