

import cv2
import os
from keras.models import load_model
from tensorflow.keras import layers
import numpy as np
from pygame import mixer
import time
mixer.init()

#face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
#eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')


model = load_model('drowsiness_detector.model')
path = os.getcwd()
cap = cv2.VideoCapture(0)
font = cv2.FONT_HERSHEY_COMPLEX_SMALL


while(True):
    ret, frame = cap.read()
    image = cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)
    
    image = cv2.resize(image,(224,224))        
    image = np.array(image,dtype='float32')
    image = np.expand_dims(image, axis=0)    #model is trained on mini_batched so reshaping image
    images = np.vstack([image])
    #Normalizing the image
    layer = layers.Normalization()
    layer.adapt(images)
    images = layer(images)

    classes = model.predict(images)
    #print(classes)
    label = np.argmax(classes)
    print(label)
    
    if(label==0):
        cv2.putText(frame,"Closed",(10,200), font, 3,(255,0,0),1,cv2.LINE_AA)
    elif(label==1):
        cv2.putText(frame,"Open",(10,200), font, 3,(255,0,0),1,cv2.LINE_AA)
    elif(label==2):
        cv2.putText(frame,"Yawn",(10,200), font, 3,(255,0,0),1,cv2.LINE_AA)
    else:
        cv2.putText(frame,"Yawn",(10,200), font, 3,(255,0,0),1,cv2.LINE_AA)
        

    cv2.imshow('frame',frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


cap.release()
cv2.destroyAllWindows()
