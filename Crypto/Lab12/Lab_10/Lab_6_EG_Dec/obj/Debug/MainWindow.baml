   M S B A M L   `   `   `  ����G  CLab_6_EG_Dec, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null+clr-namespace:Lab_6_EG_DecLab_6_EG_Dec  5   	       Lab_6_EG_Dec.MainWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   ,localclr-namespace:Lab_6_EG_Dec     5   	     � Title$�  �Лабораторная №10 - Исследование алгоритмов генерации и верификации электронной цифровой подписи��5   	   $	��450��6q   $	��800��6~   .��5	      �  � RowDefinitions 5
   
   �� 5      $��1* �6   6*   �� 5      $	��18* �6   6+   �� 5      $��1* �6   6*   �� 5      $��2* �6   6*   �� 5      $��1* �6   6*    � ColumnDefinitions 5   
   �� 5      $��1* �6   6,   �� 5      $	��10* �6   6-   �� 5      $	��10* �6   6-   �� 5      $��1* �6   6,   �� 5      $	��10* �6   6-   �� 5      $	��10* �6   6-   �� 5      $��1* �6   6,   .+�5   
   �� -   5        $��RichTextDecr��5      $��
5, 5, 5, 5q�6*   $��15(�6>   $��Showcard Gothic)�6L   $��1��6i   $��1��6v   $��2��6�   6�   �� 5   
   -   5        $��RichTextOrigDecr��5      $��
5, 5, 5, 5q�6.   $��15(�6B   $��Showcard Gothic)�6P   $��1��6m   $��4��6z   $��2��6�    �� 
IsReadOnly . 6�   �� 5   
   -   5        $��	TextPDecr��5      $��5, 5, 15, 5q�6#   $��15(�68   $��Showcard Gothic)�6F   $��3��6c   $��1��6p   6�   �� 5   
   -   5        $��	TextCDecr��5      $��15, 5, 5, 5q�6#   $��15(�68   $��Showcard Gothic)�6F   $��3��6c   $��2��6p   6�   �� 5    
   -   5        $��
ButtonDecr��5       $��15, 5, 5, 5q�6#   $��15(�68   $��Showcard Gothic)�6F   $��3��6c   $��5��6p   .��6�   	Decrypt6�   5!      5"      