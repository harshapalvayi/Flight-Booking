import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageService, SharedModule} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {AccordionModule} from 'primeng/accordion';
import {TreeTableModule} from 'primeng/treetable';
import {MessagesModule} from 'primeng/messages';
import {CarouselModule} from 'primeng/carousel';
import {TabMenuModule} from 'primeng/tabmenu';
import {CheckboxModule} from 'primeng/checkbox';
import {TabViewModule} from 'primeng/tabview';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {SpinnerModule} from 'primeng/spinner';
import {TooltipModule} from 'primeng/tooltip';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {ChartModule} from 'primeng/chart';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    CardModule,
    ChartModule,
    ToastModule,
    TableModule,
    PanelModule,
    CommonModule,
    DialogModule,
    SharedModule,
    ButtonModule,
    MessageModule,
    TooltipModule,
    SpinnerModule,
    MenubarModule,
    SidebarModule,
    TabViewModule,
    TabMenuModule,
    CheckboxModule,
    CarouselModule,
    MessagesModule,
    TreeTableModule,
    AccordionModule,
    PaginatorModule,
    InputTextModule,
    KeyFilterModule,
    SlideMenuModule,
    TieredMenuModule,
    InputSwitchModule,
    RadioButtonModule,
    MultiSelectModule,
    SelectButtonModule,
    AutoCompleteModule,
    OverlayPanelModule,
    ToggleButtonModule,
    CalendarModule,
    ProgressSpinnerModule
  ],
  exports: [
    MenuModule,
    CardModule,
    ChartModule,
    ToastModule,
    TableModule,
    PanelModule,
    CommonModule,
    DialogModule,
    SharedModule,
    ButtonModule,
    MessageModule,
    TooltipModule,
    SpinnerModule,
    MenubarModule,
    SidebarModule,
    TabViewModule,
    TabMenuModule,
    CheckboxModule,
    CarouselModule,
    MessagesModule,
    TreeTableModule,
    AccordionModule,
    PaginatorModule,
    InputTextModule,
    KeyFilterModule,
    SlideMenuModule,
    TieredMenuModule,
    InputSwitchModule,
    RadioButtonModule,
    MultiSelectModule,
    SelectButtonModule,
    AutoCompleteModule,
    OverlayPanelModule,
    ToggleButtonModule,
    CalendarModule,
    ProgressSpinnerModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimengModule { }
