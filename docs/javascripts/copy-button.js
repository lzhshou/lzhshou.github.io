document.addEventListener('DOMContentLoaded', function() {
    // 为所有带有highlight-and-copy类的div添加复制按钮
    document.querySelectorAll('.highlight-and-copy').forEach(function(div) {
        // 创建复制按钮
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = '复制';
        
        // 将按钮添加到代码块容器中
        div.style.position = 'relative';
        div.appendChild(button);
        
        // 添加点击事件
        button.addEventListener('click', function() {
            // 获取代码内容
            const codeBlock = div.querySelector('code') || div.querySelector('pre');
            const text = codeBlock.textContent;
            
            // 复制到剪贴板
            navigator.clipboard.writeText(text).then(function() {
                // 更新按钮文本
                button.textContent = '已复制！';
                setTimeout(function() {
                    button.textContent = '复制';
                }, 2000);
            }).catch(function(err) {
                console.error('复制失败:', err);
                button.textContent = '复制失败';
                setTimeout(function() {
                    button.textContent = '复制';
                }, 2000);
            });
        });
    });
}); 