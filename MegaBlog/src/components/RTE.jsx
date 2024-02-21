import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';




export default function RTE({name, control, label, defaultValue=""}) {
  return (
    /* Simple editor how to createImageBitmap, but can not use FileSystemDirectoryHandle, because we need ref */
    /* <Editor 
        initialValue='Default Value'
        init={
            {
                branding: false,
                height: 500,
                menubar: true,
                plugins: [
                    'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                    'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                    'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
                ],
                toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }
        }
    /> */
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller 
        name={name || "content"}
        control={control}
        render={({field: {onChange}})=>(
            <Editor 
                initialValue={defaultValue}
                init={
                    {
                        initialValue:{defaultValue},
                        branding: false,
                        height: 500,
                        menubar: true,
                        plugins: [
                            'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                            'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                            'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
                        ],
                        toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }
                }
                onEditorChange={onChange}
            />
        )}
        />
    </div>    

    

  )
}

