# -*- coding: utf-8 -*-
#########################################################
import os
import sys
if sys.version_info[0] == 2:
    reload(sys)
    sys.setdefaultencoding('utf-8')

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import platform

print('### sys.path : %s' % sys.path)
print('### sys.argv : %s' % sys.argv)

try:
    from gevent import monkey;monkey.patch_all()
except:
    print('not monkey')


######################################

try:
    pass
    if sys.argv[0].startswith('sjva.py'):
        try:
            if platform.system() != 'Windows':
                custom = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'custom')
                os.system("chmod 777 -R %s" % custom)
                custom = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'bin')
                os.system("chmod 777 -R %s" % custom)
        except:
            print('Exception:%s', e)
except Exception as exception:
    print('Exception:%s' % exception)


try:
    av_agent = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'custom', 'av_agent')
    if os.path.exists(av_agent):
        shutil.rmtree(av_agent)
except Exception as exception:
    print('Exception:%s' % exception)


import framework
import system
   
app = framework.app
celery = framework.celery

def start_app():
    for i in range(10):
        try:
            framework.socketio.run(app, host='0.0.0.0', port=app.config['config']['port'])
            print('EXIT CODE : %s' % framework.exit_code)
            if framework.exit_code != -1:
                sys.exit(framework.exit_code)
                break
            else:
                print('framework.exit_code is -1')
            break
        except Exception as exception:
            print(str(exception))
            import time
            time.sleep(10*i)
            continue
        except KeyboardInterrupt:
            print('KeyboardInterrupt !!')
    print('start_app() end')

if __name__ == '__main__':
    try:
        start_app()
    except Exception as exception:
        print(str(exception))
        
