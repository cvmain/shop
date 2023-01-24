import { ElNotification } from 'element-plus'
import nProgress from 'nprogress'
//封装消息提示
export function toast(message,type="success",dangerouslyUseHTMLString = false){
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString
      })
}
//封装对话提示框
export function showModul(content="内容",type="waring",title=""){
    return ElMessageBox.confirm(
        content,
        title,
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type,
        }
      )
       
}

//开启全屏loading
export function showFullLoading(){
  nProgress.start()
}
//关闭全屏loading
export function hideFullLoading(){
  nProgress.done()
}