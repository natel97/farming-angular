import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service';
import { Tool } from './tool';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  tools: Tool[];
  constructor(private toolService: ToolService) { }
  ngOnInit() {
    this.tools = this.toolService.getAllTools();
  }

  setTool(event, id: number) {
    event.dataTransfer.setData('tool', id);
  }
}
