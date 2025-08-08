
// nasal_secretions_religion/frontend/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // 部署检测
    console.log('鼻屎教网站已部署 - 版本: 2025.08.04');
    
    // 初始化粒子效果
    if (typeof particlesJS !== 'undefined') {
        try {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#9c27b0" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: "#9c27b0", opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    }
                }
            });
        } catch (e) {
            console.error('粒子效果初始化失败:', e);
        }
    } else {
        console.warn('粒子效果库加载失败');
    }

    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            try {
                mobileMenu.classList.toggle('hidden');
            } catch (e) {
                console.error('移动菜单切换失败:', e);
            }
        });
    }

    // 表单验证和提交
    const joinForm = document.getElementById('join-form');
    
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            try {
                const name = document.getElementById('name').value.trim();
                const className = document.getElementById('class').value.trim();
                const wechat = document.getElementById('wechat').value.trim();
                const reason = document.getElementById('reason').value.trim();
                
                if (!name || !className || !wechat || !reason) {
                    alert('请填写所有必填字段');
                    return;
                }
                
                // 存储申请信息
                const application = {
                    name,
                    class: className,
                    wechat,
                    reason,
                    date: new Date().toISOString()
                };
                
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('nasal_application', JSON.stringify(application));
                    alert('申请已提交！我们会尽快与您联系。');
                    joinForm.reset();
                } else {
                    alert('您的浏览器不支持本地存储功能');
                }
            } catch (e) {
                alert('提交失败，请重试');
                console.error('表单提交错误:', e);
            }
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            try {
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // 关闭移动菜单
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            } catch (e) {
                console.error('平滑滚动失败:', e);
            }
        });
    });

    // 成员卡片悬停效果
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            try {
                const details = this.querySelector('.member-details');
                if (details) {
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }
            } catch (e) {
                console.error('悬停效果应用失败:', e);
            }
        });
        
        card.addEventListener('mouseleave', function() {
            try {
                const details = this.querySelector('.member-details');
                if (details) {
                    details.style.opacity = '0';
                    details.style.transform = 'translateY(20px)';
                }
            } catch (e) {
                console.error('悬停效果移除失败:', e);
            }
        });
    });

    // 页面加载动画
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        try {
            setTimeout(() => {
                pageTransition.style.opacity = '1';
            }, 100);
        } catch (e) {
            console.error('页面过渡动画失败:', e);
        }
    }
});
